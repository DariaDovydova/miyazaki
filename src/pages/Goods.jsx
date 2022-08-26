import { GoodsList } from "../components/GoodsList";
import { useNavigate } from "react-router-dom";

const Goods = () => {
  const navigate = useNavigate();

  return (
    <div>
      <GoodsList />
      <button className='btn' onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export { Goods };