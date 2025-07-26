import { Link } from "react-router-dom"
import { useTitle } from "../hook/useTitle"

export const PageNotFound = ()=>{
        useTitle("Page not found")
    return(
        <main>
            <section className="flex flex-col justify-center mt-5">
                <div >
                    <p className=" flex flex-col items-center text-7xl text-Red bg-black-700 pt-10 px-20 mb-5"> 404 Oops !</p>
                    <div className="flex flex-col items-center">
                        <img src="/assets/Image/PageNotFound.jpg" alt="404 page not found"/>
                    </div>
                </div>

                <div className="text-center mt-5 mb-10">
                    <Link to="/">
                        <button className="hover:bg-blue-700 px-5 py-5  bg-blue-500 text-white text-3xl font-bold " type="button">Back to Home</button>
                    </Link>
                </div>
            </section>
        </main>
    )
}