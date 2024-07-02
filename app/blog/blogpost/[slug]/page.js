export default function Page({ params }) {
    return <div >
        <div className=" py-14 sm:py-22">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-[#003049] sm:text-4xl capitalize">{params.slug}</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to become expert in javascript.</p>
                </div>
                <div className="mx-auto mt-10  max-w-2xl  border-t border-gray-500 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <p className="mt-5  ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nulla repudiandae sint facilis, sunt corrupti numquam id illo. Ut deserunt animi iste voluptatum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus maxime rem earum repudiandae, cum possimus quae assumenda nulla culpa. Odit architecto repellendus non, unde recusandae placeat nisi perferendis quod nesciunt! Dolorum sapiente et sint consequuntur earum blanditiis iusto reprehenderit molestiae quia eligendi? Exercitationem, officia nobis!
                    </p>
                </div>
            </div>
        </div>
    </div>

}