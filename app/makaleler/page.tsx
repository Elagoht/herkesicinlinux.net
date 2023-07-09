import { allDocs } from '@/.contentlayer/generated'
import BlogBox from '@/components/BlogBox'

const page = () => {

  return <BlogBox docs={allDocs} />
}
export default page