import { RouteComponentProps } from 'react-router-dom'
import { ComponentType } from 'react'
import { LoadingComponentProps } from 'react-loadable'

export interface RouteBaseProps {
  path: string
  loader(): Promise<ComponentType<RouteComponentProps>>
}

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
  Loading?: React.ComponentType<LoadingComponentProps>
  children?: React.ReactElement
}