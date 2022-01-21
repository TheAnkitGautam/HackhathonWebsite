export default function Sponsors() {
  const sponsorCards = Array(9).fill(
    <div className="rounded-lg overflow-hidden">
      <h3 className="w-full bg-red-500 text-center p-1 text-gray-50 text-lg font-semibold">
        Rebook
      </h3>
      <div className="w-full flex justify-center relative">
        <img src="/Images/sponsors/mcdonalds-logo.png" alt="" className="relative z-10 py-5" />
        <div className="absolute flex w-full h-full flex-col">
          <div className="flex-grow bg-gradient-to-b from-white to-gray-100" />
          <div className="w-full h-32 bg-gradient-to-b from-gray-100" />
        </div>
      </div>
    </div>
  ).map((card, i) => (
    <div key={ i }>
      { card }
    </div>
  ))
  return (
    <>
      <h1 className="text-5xl text-center text-white font-semibold">
        <span className="inline-block bg-white w-52 h-0.5 relative align-middle after:absolute after:bg-white after:w-2 after:h-2 after:rotate-45 after:right-0 after:top-1/2 after:-translate-y-1/2" />
        <span> Sponsors </span>
        <span className="inline-block bg-white w-52 h-0.5 relative align-middle after:absolute after:bg-white after:w-2 after:h-2 after:rotate-45 after:left-0 after:top-1/2 after:-translate-y-1/2" />
      </h1>
      <p className="mt-6 capitalize text-2xl text-white tracking-wider font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac euismod neque. Mauris arcu arcu, lobortis <span className="text-red-600">nec maximus egestas, maximus eget lacus.</span>la facilisi.
      </p>
      <div className="mt-24 grid grid-cols-3 gap-14">
        { sponsorCards }
      </div>
    </>
  )
}