import { useEffect, useState } from "react";
import getFutsal from "./modules/auth/api/authApi";

const App = () => {
  const [futsals, setFutsals] = useState([]);

  useEffect(() => {
    const fuc = async () => {
      setFutsals(await getFutsal());
    };
    fuc();
  }, []);

  return (
    <>
      <div>Hello World</div>
      <div style={{ backgroundColor: "green" }}>
        {futsals.length > 0 ? (
          futsals.map(item => (
            <p key={item._id}>{item.name}</p>
          ))
        ) : (
          <p>Empty</p>
        )}
      </div>
    </>
  );
};

export default App;
