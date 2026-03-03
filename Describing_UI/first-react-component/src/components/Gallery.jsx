function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}
const Gallery = () => {
  return (
    <section className="m-5">
      <h1 className="font-bold text-2xl">Amazing scientists</h1>
      <div className="flex py-2 gap-3">
        <Profile />
        <Profile />
        <Profile />
      </div>
      {/* Components can render other components, but you must never nest their definitions */}
      {/* function demo()
      {
        // Never define a component inside another component! like this demo inside gallery
        <h1>Nested Demo</h1>
      } */}
      {/* define every component at the top level */}
      {/* function demo()
      {
        <h1>Top level demo</h1>
        //declaring demo as a top level component
      } */}
    </section>
  );
};

export default Gallery;
