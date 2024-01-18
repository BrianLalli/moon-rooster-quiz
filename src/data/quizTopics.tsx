import { ReactNode } from 'react'
import { ReactComponent as CSS } from '../assets/icons/css-3.svg'
import { ReactComponent as JavaScript } from '../assets/icons/javascript.svg'
import { ReactComponent as Python } from '../assets/icons/python.svg'
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg'
import { ReactComponent as BulbIcon } from '../assets/icons/bulb.svg'
import {ReactComponent as SQL } from '../assets/icons/sql-database-sql-azure.svg'
import {ReactComponent as TheOffice } from '../assets/icons/OFFICE-LOGO.svg'
import {ReactComponent as Referee } from '../assets/icons/referee.svg'
import {ReactComponent as Mixology } from '../assets/icons/cocktail-glass.svg'
import {ReactComponent as Steelers } from '../assets/icons/steelers.svg'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'React',
    icon: <ReactIcon />,
  },
  {
    title: 'JavaScript',
    icon: <JavaScript />,
  },
  {
    title: 'Python',
    icon: <Python />,
  },

  {
    title: 'CSS',
    icon: <CSS />,
  },
  {
    title: 'SQL',
    icon: <SQL />,
  },
  {
    title: 'General Knowledge',
    icon: <BulbIcon />,
  },
  {
    title: 'The Office',
    icon: <TheOffice />,
  },
  {
    title: 'Pittsburgh Steelers',
    icon: <Steelers />,
  },
  {
    title: 'Football Officiating',
    icon: <Referee />
  },
  {
    title: 'Mixology',
    icon: <Mixology />,
  },
]
