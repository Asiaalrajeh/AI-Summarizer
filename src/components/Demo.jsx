import { useState , useEffect } from "react"
import {copy, linkIcon, loader, tick} from '../assets';



export const Demo = () => {
   const [article, setArticle] = useState({
     url: '',
     summary: '',
   });

  const submit = async(e) => {
   alert('submited');
  } 

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form className="relative flex justify-center items-center" onSubmit={submit}>
          <img src={linkIcon} alt="link_icon" className="absolute left-0 my-2 ml-3 w-5"/>
          <input type="url" placeholder="Enter a URL" value={article.url} onChange={(e) => setArticle({article, url: e.target.value})} required className="url_input peer" />

          <button type="submit" className="submit_btn">
           Submit
          </button>
        </form>

        {/* history */}
      </div>
      {/* result */}
    </section>
  )
}
