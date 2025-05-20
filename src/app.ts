import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import notFound from './app/middlewares/notFound'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { BlogRoute } from './app/modules/blog/blog.route'
import { ProjectRoute } from './app/modules/project/project.route'
import { MessageRoute } from './app/modules/message/message.route'
import { AdminRoute } from './app/modules/admin/admin.route'
import { AuthRoute } from './app/modules/auth/auth.route'
import { SkillRoute } from './app/modules/skill/skill.route'

const app: Express = express()
//parser
app.use(express.json())
app.use(cookieParser())

app.use(
  cors({
    origin: ['https://my-portfolio-psi-ten-98.vercel.app'],
    credentials: true,
  }),
)

app.use('/api/blogs', BlogRoute)
app.use('/api/projects', ProjectRoute)
app.use('/api/messages', MessageRoute)
app.use('/api/admin', AdminRoute)
app.use('/api/auth', AuthRoute)
app.use('/api/skills', SkillRoute)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello From Md Minhajul Islam 😉')
})

app.use(globalErrorHandler)
app.use(notFound)
export default app
