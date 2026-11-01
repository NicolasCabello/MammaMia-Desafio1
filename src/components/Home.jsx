import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
  return (
    <main className="home">
      <Header />
      <section className="container my-4">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img="/pizzas/napolitana.jpg"
            />
          </div>
          <div className="col-12 col-md-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img="/pizzas/espanola.jpg"
            />
          </div>
          <div className="col-12 col-md-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img="/pizzas/pepperoni.jpg"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
