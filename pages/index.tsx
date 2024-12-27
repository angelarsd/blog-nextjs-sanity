import Home from 'components/Home'
import IndexPage from 'components/IndexPage'
import PreviewIndexPage from 'components/PreviewIndexPage'
import { CMS_URL } from 'lib/constants'
import { readToken } from 'lib/sanity.api'
import { getAllPosts, getClient, getSettings } from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetServerSideProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  posts: Post[]
  settings: Settings
  host: string
}

interface Query {
  [key: string]: string
}

export default function Page({ posts, settings, draftMode, host }: PageProps) {
  if (host !== CMS_URL) {
    return <Home allPosts={posts} />
  }

  if (draftMode) {
    return <PreviewIndexPage posts={posts} settings={settings} />
  }

  return <IndexPage posts={posts} settings={settings} />
}

export const getServerSideProps: GetServerSideProps<PageProps, Query> = async (
  ctx,
) => {
  const { req } = ctx
  const host = req.headers.host

  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, posts = []] = await Promise.all([
    getSettings(client),
    getAllPosts(client),
  ])

  return {
    props: {
      posts,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
      host,
    },
  }
}
