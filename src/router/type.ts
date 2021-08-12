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
  renderNoMatch?: React.ComponentType<RouteComponentProps>
  renderLoading?: React.ComponentType<any>
  children?: React.ReactElement
}