import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'
const HomePage = () => {
  return (
    <BlogLayout>
      <h1>Welcome</h1>
      <p>Hello world</p>
      <BlogPostsCell />
      <p></p>
    </BlogLayout>
  )
}

export default HomePage
