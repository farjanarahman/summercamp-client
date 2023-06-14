import { Helmet } from 'react-helmet-async';
import CheckoutForm from '../../pages/Dashboard/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../hooks/useCart';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, course) => sum + course.price, 0)

    return (
        <div className='w-full'>
            <Helmet>
                <title>Summer Camp | Payment</title>
            </Helmet>
            <h3 className='text-3xl font-semibold text-center mb-8'>Payment</h3>
            <div className="divider"></div>

            <Elements stripe={stripePromise}>

                <CheckoutForm cart={cart} price={total}></CheckoutForm>
                
            </Elements>
        </div>
    );
};

export default Payment;