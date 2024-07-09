//
// export const generateStaticParams = () => {
//   return [{ viewport: 'd' }, { viewport: 'm' }, { viewport: 'p' }]
// }

import { PropsWithChildren } from 'react'

export default function MainAppLayout(props: PropsWithChildren<any>) {
  if (props.params.viewport === 'p') return <>{props.children}</>
  return (
    <>
      {props.modals}
      <div style={{ margin: '30px' }} {...props} />
    </>
  )
}
