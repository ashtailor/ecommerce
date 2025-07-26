import { Link } from "react-router-dom";

export const OrderFail = () => {

    return(
        <section className="border-4 border-gray-800 max-w-md mx-auto px-10 py-10 mt-10 mb-5">
            <div>
               <div>
                    <p className="bi bi-exclamation-circle text-7xl text-green-800 text-center mb-3 "></p>
                    <p className="mb-5 text-center text-normal">Payment failed,please try again!</p>
               </div>
                <div className="mb-10 text-center">
                      <p className="text-center">Your order is not confirmed.</p>
                       <p>Connect codebook@example.com for support.</p>
                </div>
            </div>
            <Link to="" type="button" className ="bg-blue-500 hover:bg-blue-800 px-3 py-3 text-white text-center bi bi-cart-fill rounded-lg">Check Cart Again</Link>
        </section>
    );
}