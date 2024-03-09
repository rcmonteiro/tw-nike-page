import Article from "@/components/common/Article"
import Menu from "@/components/menu/Menu"

const Page = () => {

  return (
    <main className="flex bg-white text-black">
      <Menu/>
      <article className="ml-16">
        <Article/>
      </article>
    </main>
  )

}

export default Page