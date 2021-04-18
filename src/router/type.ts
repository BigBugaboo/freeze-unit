import { RouteComponentProps } from 'react-router-dom'
import { ComponentType } from 'react'

export interface RedirectBaseProps {
  to: string
  from: string
}

export interface NavConfigItem {
  link: string
  sub?: NavConfigItem[]
}

export interface AutoRouterProps {
  navConfig?: NavConfigItem[]
  NoMatch?: React.ComponentType<RouteComponentProps>
  Loading?: React.ReactElement
  children?: React.ReactElement
}