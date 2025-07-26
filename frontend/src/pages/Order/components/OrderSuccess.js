import { Link } from "react-router-dom";

export const 
OrderSuccess =({data})=>{
    return(
        <section className="text-center text-black max-w-md mx-auto mt-10 mb-10 border-4 border-black p-4 rounded-lg ">
            <div className="my-5">
                <p className="bi bi-check-circle text-green-800 text-7xl mb-5"></p>
                <p>Thank you {data.user.name} for the order!</p>
                <p>Your Order ID:{data.id}</p>
            </div>

            <div className="my-5">
                <p>Your order is confirmed.</p>
                <p>Please check your email ({data.user.email}) for the eBook</p>
                <p className="my-5 mb-7">Payment ID: xyz_123456789</p>
            </div>
            <Link to="/products" type="button" className="bg-blue-400 mb-2text-white px-4 py-3 mt-2 hover:bg-blue-700 rounded-lg">Continue Shopping</Link>
        </section>
    );
}

