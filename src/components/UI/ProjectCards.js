import { ArrowRight } from 'lucide-react';

export default function ProjectCards({day, title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block lg:w-96 md:w-3/4 rounded-2xl border border-gray-200 bg-[#F8F8FF] pt-3 px-6 pb-6 shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl"
    >
    <div className="flex justify-end h-1 pb-2 flex-center">
        <ArrowRight className="text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
    </div>
    <div className="flex items-start gap-5">
        <div className='max-w-[80px]'>
            <p className="text-sm text-gray-500">{day}</p>
        </div>

        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </a>
  );
}
