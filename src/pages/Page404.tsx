import img_404 from "../assets/images/img_404.jpg";

const Page404 = () => {
  return (
    <>
      <div className="justify-center space-y-16 mt-8">
        <p className="text-center text-3xl font-bold mb-4">Error 404</p>
        <div className="flex justify-center">
          <img src={img_404} alt="alt" className="w-1/4" />
        </div>
        <p className="text-center text-lg ">Page not found</p>
      </div>
    </>
  )
}

export default Page404
