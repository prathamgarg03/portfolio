import { Link } from 'react-router-dom';

const SearchCardItem = ({ icon, header, title, description, link, openDrawer, content }) => {
  const handleOpenDrawer = () => {
    openDrawer({ icon, header, title, description, link, content });
  };

  return (
    <div className="sm:mb-6 p-4 sm:p-0">
      <div className='flex'>
        <div className='flex justify-start mt-2 mr-2 size-6'>
          {icon}
        </div>
        <div>
          {header}
          <p className="text-sm text-gray-600 mb-1">{link}</p>
        </div>
      </div>

      {header === "Projects" ? (
        <Link to="/projects" className="text-blue-800 hover:underline text-xl">
          {title}
        </Link>
      ) : (
        <p className="text-blue-800 hover:underline hover:cursor-pointer text-xl" onClick={handleOpenDrawer}>
          {title}
        </p>
      )}

      <p className="text-gray-800">{description} ...</p>
    </div>
  );
};
function SearchCards({ results, openDrawer }) {
  return (
    <div className="max-w-4xl mx-auto">
      {results.map((result, index) => (
        <SearchCardItem
          key={index}
          icon={result.icon}
          header={result.header}
          title={result.title}
          description={result.description}
          link={result.link}
          content={result.content}
          openDrawer={openDrawer}
        />
      ))}
    </div>
  );
}

export default SearchCards;
