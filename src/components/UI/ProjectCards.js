

export default function ProjectCards({image, day, title, description, link, language}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-sm bg-[#4295C233] rounded overflow-hidden shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
    >
      <img class="w-full" src={image} alt={title}></img>
      <div className="px-6 py-2">
          <div className="px-6 py-4">
            <h3 className="font-bold text-xl">
              {title}
            </h3>
            <p className="text-xs text-gray-500 mb-2">{day}</p>
            <p className="text-sm text-gray-600">{description}</p>
          </div>

        </div>
          <div className='px-7 pt-2 pb-2'>
              {language?.split(',').map((lang, index)=>
                <span
                key={index}
                className='inline-block border border-[#4195C2] rounded-full px-3 py-1 text-sm mr-2 mb-2 transition-transform hover:translate-y-[-5px] hover:shadow-md'
                >
                  {lang.trim()}
                </span>
              )}
          </div>
    </a>
  );
}
