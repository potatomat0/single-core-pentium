// 'use client'
// import {allBlogs} from "contentlayer/generated";
// import HomeCoverSection from "../components/Home/HomeCoverSection";
// import FeaturedPosts from "../components/Home/FeaturedPosts";
// import RecentPosts from "../components/Home/RecentPosts";
// import HomeLayout from "./layouts/HomeLayout";
// import { usePathname } from 'next/navigation'

// export default function Home() {
//   const pathname = usePathname()
//   return (
//     <main className="flex flex-col items-center justify-center">

//       <HomeCoverSection blogs={allBlogs} />
//       <p className="text-light">Hi Mom i'm Currently at pathname: {pathname}</p>
//       {/* <FeaturedPosts blogs={allBlogs} /> */}
//       {/* <RecentPosts blogs={allBlogs} /> */}
//     </main>
//   )
// }

// Home.getLayout = HomeLayout; 

'use client'
import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import { usePathname } from 'next/navigation';
import Layout from './layout';

export default function Home() {
  const pathname = usePathname();
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <p className="text-light">Hi Mom i'm Currently at pathname: {pathname}</p>
      {/* <FeaturedPosts blogs={allBlogs} /> */}
      {/* <RecentPosts blogs={allBlogs} /> */}
    </main>
  )
}

Home.getLayout = (page) => <Layout pathname={page.props.pathname}>{page}</Layout>;