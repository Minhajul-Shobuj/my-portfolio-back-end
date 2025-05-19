/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import jwt, { JwtPayload, Secret } from 'jsonwebtoken'
import { Admin } from '../admin/admin.model'

const adminLogin = async (payload: { email: string; password: string }) => {
  const userData = await Admin.findOne({ email: payload.email })
  if (!userData) {
    throw new Error('You are not authorized')
  }
  if (payload.password !== userData.password) {
    throw new Error('check your password')
  }
  const accessToken = await jwt.sign(
    { email: userData.email, role: 'Admin' },
    process.env.JWT_ACCESS_SECRET as string,
    {
      expiresIn: '15d',
    },
  )
  const refreshToken = jwt.sign(
    { email: userData.email, role: 'Admin' },
    process.env.JWT_REFRESH_SECRET as string,
    {
      expiresIn: '30d',
    },
  )
  return {
    accessToken,
    refreshToken,
  }
}

const refreshToken = async (token: string) => {
  let decoded
  try {
    decoded = jwt.verify(
      token,
      process.env.JWT_REFRESH_SECRET as Secret,
    ) as JwtPayload
  } catch (err) {
    throw new Error('You are not authorized')
  }
  const userData = await Admin.findOne({ email: decoded.email })
  if (!userData) {
    throw new Error('You are not authorized')
  }
  if (decoded.password !== userData.password) {
    throw new Error('check your password')
  }
  const accessToken = await jwt.sign(
    { email: (await userData).email, role: 'Admin' },
    process.env.JWT_ACCESS_SECRET as Secret,
    {
      expiresIn: '15d',
    },
  )
  return {
    accessToken,
  }
}

export const AuthService = {
  adminLogin,
  refreshToken,
}
