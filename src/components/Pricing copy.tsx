import Page from './common/Page'
import PackageCard from './common/PackageCard'
import { packageContents } from './constants'

const Pricing = () => {
  return (
    <Page>
      <div className='lg:pb-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-full w-full py-10'>
        {packageContents.map((pkg) => {
          return <div className='w-full' key={pkg.designation}>
          <PackageCard pkg={pkg} />
          </div>
        })}
      </div>
      </div>
    </Page>
  )
}

export default Pricing