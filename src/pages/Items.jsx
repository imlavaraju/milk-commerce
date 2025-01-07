import fresh_milk from "../assets/fresh_milk.png"
import buffalo_milk from "../assets/buffalo_milk.jpg"
import curd from "../assets/curd.png"
import paneer from "../assets/paneer.png"
import butter_milk from "../assets/butter_milk.png"
import lassi from "../assets/lassi.png"
import ghee from "../assets/ghee.png"
import milkshake_v from "../assets/milkshake.png"
import milkshake_c from "../assets/milkshake_choclate.png"
import kheer from "../assets/kheer.png"
const milkProducts = [
    {
      id: 1,
      name: "Fresh Cow Milk",
      quantity: "1 Liter",
      rate: 60, // in INR
      imageUrl: fresh_milk
    },
    {
      id: 2,
      name: "Buffalo Milk",
      quantity: "1 Liter",
      rate: 75, // in INR
      imageUrl: buffalo_milk,
    },
    {
      id: 3,
      name: "Curd",
      quantity: "500 grams",
      rate: 40, // in INR
      imageUrl: curd,
    },
    {
      id: 4,
      name: "Paneer",
      quantity: "250 grams",
      rate: 90, // in INR
      imageUrl: paneer,
    },
    {
      id: 5,
      name: "Buttermilk",
      quantity: "500 ml",
      rate: 30, // in INR
      imageUrl: butter_milk,
    },
    {
      id: 6,
      name: "Lassi",
      quantity: "500 ml",
      rate: 35, // in INR
      imageUrl: lassi,
    },
    {
      id: 7,
      name: "Ghee",
      quantity: "200 grams",
      rate: 250, // in INR
      imageUrl: ghee,
    },
    {
      id: 8,
      name: "Milkshake (Vanilla)",
      quantity: "300 ml",
      rate: 80, // in INR
      imageUrl: milkshake_v,
    },
    {
      id: 9,
      name: "Milkshake (Chocolate)",
      quantity: "300 ml",
      rate: 90, // in INR
      imageUrl: milkshake_c
    },
    {
      id: 10,
      name: "Kheer",
      quantity: "200 grams",
      rate: 100, // in INR
      imageUrl: kheer,
    },
    {
      id: 11,
      name: "Rabri",
      quantity: "200 grams",
      rate: 150, // in INR
      imageUrl: "https://via.placeholder.com/150?text=Rabri",
    },
    {
      id: 12,
      name: "Cheese",
      quantity: "200 grams",
      rate: 120, // in INR
      imageUrl: "https://via.placeholder.com/150?text=Cheese",
    },
    {
      id: 13,
      name: "Butter",
      quantity: "100 grams",
      rate: 75, // in INR
      imageUrl: "https://via.placeholder.com/150?text=Butter",
    },
    {
      id: 14,
      name: "Milk Powder",
      quantity: "200 grams",
      rate: 150, // in INR
      imageUrl: "https://via.placeholder.com/150?text=Milk+Powder",
    },
    {
      id: 15,
      name: "Ice Cream (Vanilla)",
      quantity: "500 ml",
      rate: 120, // in INR
      imageUrl: "https://via.placeholder.com/150?text=Vanilla+Ice+Cream",
    },
    {
      id: 16,
      name: "Ice Cream (Chocolate)",
      quantity: "500 ml",
      rate: 130, // in INR
      imageUrl: "https://via.placeholder.com/150?text=Chocolate+Ice+Cream",
    },
    {
      id: 17,
      name: "Sweetened Condensed Milk",
      quantity: "400 grams",
      rate: 70, // in INR
      imageUrl: "https://via.placeholder.com/150?text=Condensed+Milk",
    },
    {
      id: 18,
      name: "Milk Pudding",
      quantity: "200 grams",
      rate: 80, // in INR
      imageUrl: "https://via.placeholder.com/150?text=Milk+Pudding",
    },
    {
      id: 19,
      name: "Flavored Milk (Strawberry)",
      quantity: "300 ml",
      rate: 40, // in INR
      imageUrl: "https://via.placeholder.com/150?text=Strawberry+Milk",
    },
    {
      id: 20,
      name: "Flavored Milk (Mango)",
      quantity: "300 ml",
      rate: 45, // in INR
      imageUrl: "https://via.placeholder.com/150?text=Mango+Milk",
    }
  ];

  
  function MilkProductsList() {
        const handleWhatsApp = (productName) => {
          const message = `Hi, I am interested in purchasing ${productName} please provide to me.`;
          const encodedMessage = encodeURIComponent(message);
          window.open(`https://wa.me/+919381619177?text=${encodedMessage}`, '_blank'); // Replace with your WhatsApp number
        };

        const handleCallMe = () => {
            window.location.href = 'tel:+919381619177'; // Replace with your phone number
          };


    return (
      <section className="bg-white dark:bg-slate-900 text-gray-600 body-font">
        <div className="container mx-auto px-5 py-4">
          <div className="flex flex-wrap items-center justify-center -m-4">
            {milkProducts.map((product) => (
              <div key={product.id} className="p-4 md:w-1/2 lg:w-1/3">
                <div className="h-full bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="p-6">
                    <img
                      className="object-cover object-center w-full h-48 rounded-md mb-4"
                      alt={product.name}
                      src={product.imageUrl}
                    />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {product.name}
                    </h2>
                    <div className="flex flex-row justify-between">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {product.quantity}
                    </p>
                    <p className="text-gray-900 dark:text-gray-100 font-bold">
                      ₹{product.rate}
                    </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-row items-center justify-center mb-2">
                    
                    
                    <button onClick={handleCallMe}   className="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-700 rounded text-lg "
                    >Contact</button>
                      
                    
                    <button
                      onClick={() => handleWhatsApp(product.name)}
                      className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                    >
                      WhatsApp
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default MilkProductsList;
  
  