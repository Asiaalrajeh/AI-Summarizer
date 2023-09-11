import logo from '../assets/logo.svg';


export const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="logo" className="w-14 object-contain" id="logo"/>
        </nav>

        <h1 className="text">
            <span className="orange_gradient">AI Summarizer</span>
        </h1>
        <h2 className="desc">
        Use an open-source article summarizer to save time and simplify your reading by converting lengthy articles into clear and short summaries.        </h2>
    </header>
  )
  }