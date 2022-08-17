export default function Loader() {
  return (
    <div className="w-full z-50 flex items-center justify-center">
      <div className="loader border-t-secondary ease-linear rounded-full border-4 border-t-4 border-primaryLight h-8 w-8 mb-4"></div>
      <style jsx>{`
      .loader {
        
        -webkit-animation: spinner 1.5s linear infinite;
        animation: spinner 1.5s linear infinite;
      }
      
      @-webkit-keyframes spinner {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      
      @keyframes spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      `}</style>
    </div>
  )
}