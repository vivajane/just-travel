"use client";
import { useContext, useState, useEffect } from "react";
import { ContextActivity } from "./Context";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const DetailActivity = ({ activity }) => {
  const router = useRouter();
  const { isAuth, added, setAdded, loading } = useContext(ContextActivity);
  const [quantity, setQuantity] = useState(1);
  const [formValues, setFormValues] = useState({
    date: "",
    time: "",
  });

  const onChangeHandler = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(formValues);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!formValues.date || !formValues.time) {
      toast.error("Please fill all the fields");
      return;
    }
    if (!isAuth && !loading) {
      router.push(
        `/login?redirect=${encodeURIComponent(window.location.pathname)}`
      );
      return;
    }
    const newData = {
      id: `${activity.id} -${Date.now()}`,
      date: formValues.date,
      time: formValues.time,
    };
    const newActivity = { ...newData, ...activity, quantity };
    setAdded((prev) => {
      const updated = [...prev, newActivity];

      return updated;
    });
    router.push("/savedActivities");

    setFormValues({
      date: "",
      time: "",
    });
  };
  useEffect(() => {
    localStorage.setItem("added", JSON.stringify(added));
  }, [added]);

  const IncreaseCount = () => {
    if (quantity >= 0) {
      setQuantity((prev) => prev + 1);
    }
  };

  const DecreaseCount = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className="md:px-20 px-8 pb-10 pt-30 ">
      <div className="md:flex w-full gap-20 ">
        <div className="md:w-1/2">
          <img
            src={activity.images[0]}
            className="object-cover w-full max-h-[400px] sm:max-h-[600px] md:max-h-[500px]  rounded-md"
            alt={activity.name}
          />
        </div>
        <div className="md:w-1/2 flex gap-7 ">
          <div className=" space-y-2">
            <h1 className="lg:text-2xl md:text-lg pt-6 md:pt-0 font-bold">{activity.name}</h1>
            <p className="bg-pink-700 text-white lg:text-lg md:text-sm text-sm p-2 py-2 inline-flex px-3 rounded-md">
              Opening hoursrr : {activity.activeTime}
            </p>
            <p className="text-sm">{activity.description}</p>
            <h1>
              {" "}
              Price:{" "}
              <span className="font-bold text-lg pl-2">₦{activity.price}</span>
            </h1>

            <div className="flex gap-3 items-center">
              <h1>Number of Tickets:</h1>
              <div className="flex gap-2 bg-pink-700 rounded-lg">
                <button
                  onClick={DecreaseCount}
                  className=" text-white cursor-pointer p-2 inline-flex px-3 rounded-md"
                >
                  -
                </button>
                <span className="p-2 inline-flex px-3 rounded-md">
                  {quantity}
                </span>
                <button
                  onClick={IncreaseCount}
                  className=" text-white cursor-pointer p-2 py-2 inline-flex px-3 rounded-md"
                >
                  +
                </button>
              </div>
            </div>
            <form onSubmit={onSubmitHandler}>
              <div className="">
                <label htmlFor="date">Date</label>
                <input
                  onChange={onChangeHandler}
                  className="p-2 py-2 mt-2 inline-flex border border-r-gray-400 focus:outline-pink-700 w-full rounded-md"
                  type="date"
                  name="date"
                  min={new Date().toISOString().split("T")[0]}
                  id="date"
                  value={formValues.date}
                />
              </div>
              <div className="py-3">
                <label htmlFor="time">Time</label>
                <input
                  onChange={onChangeHandler}
                  className="p-2 py-2 mt-2 inline-flex border border-r-gray-400 focus:outline-pink-700 w-full rounded-md"
                  value={formValues.time}
                  type="time"
                  name="time"
                  id="time"
                />
              </div>
            </form>
          </div>

          <div className="sm:block hidden py-6">
            <div className="shadow-md  shadow-pink-700 sm:h-[250px] md:h-[200px]  lg:px-8 px-6  rounded-md py-6 text-sm space-y-2 ">
              <h1>
                VAT: <span>0%</span>
              </h1>
              <h1 className="text-sm">
                No of Tickets: <span>{quantity}</span>
              </h1>
              <h1 className="font-bold text-sm">
                SubTotal: <span>₦{activity.price * quantity}</span>
              </h1>

              <button
                type="submit"
                onClick={onSubmitHandler}
                className="p-2 px-10 py-2 cursor-pointer mt-3 inline-flex border focus:outline-pink-700 bg-gray-500 hover:bg-pink-700 text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="shadow-md mt-3 sm:hidden block shadow-pink-700 max-h-[300px] max-w-44 px-6 rounded-md py-6 space-y-2 ">
          <h1>
            VAT: <span>30%</span>
          </h1>
          <h1>
            No of Tickets: <span>{quantity}</span>
          </h1>
          <h1 className="font-bold">
            SubTotal: <span>₦{activity.price * quantity}</span>
          </h1>

          <button
            type="submit"
            onClick={onSubmitHandler}
            className="p-2 px-10 py-2 cursor-pointer mt-3 inline-flex border focus:outline-pink-700 bg-gray-500 hover:bg-pink-700 text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailActivity;
