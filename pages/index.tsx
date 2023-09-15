import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VideoBanner, { Video } from '@/components/VideoBanner'
import { UserType } from '@/components/User';
import UsersList from '@/components/UsersList';


type DataSmartUI = {
  users: UserType[];
  video: Video,
}

export const getStaticProps = async () => {
  const res = await fetch('https://tz.smart-ui.pro/');
  const data: DataSmartUI = await res.json()

  return {
    props: {
      data,
    },
  }
}

const Home = ({ data }: { data: DataSmartUI }) => {
  const { video, users } = data;

  return (
    <>
      <Head>
        <title>Test Task</title>
        <meta name="description" content="Test task from Smart-UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <VideoBanner video={video} />
      <UsersList users={users} />
      <Footer />
    </>
  )
}

export default Home;
