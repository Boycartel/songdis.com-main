import { SetStateAction, useEffect, useState } from 'react';
import UploadTypeSelection from '../UploadMusic/type';
import SidebarMenu from '../../components/Home/menu';
import { PencilIcon, EllipsisVerticalIcon, ClipboardIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { BASE_URL } from '../apiConfig';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

type Release = {
  id: string;
  track_title: string;
  primary_artist: string;
  featured_artists?: string;
  album_art_url: string;
  upload_type: string;
  release_link: string;
  release_title?: string;
};

const Link = () => {
  const [search, setSearch] = useState('');
  const [releases, setReleases] = useState<Release[]>([]);
  const [groupedReleases, setGroupedReleases] = useState<Record<string, Release[]>>({});
  const [loading, setLoading] = useState(true);
  const [isSelectingType, setIsSelectingType] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedAlbums, setExpandedAlbums] = useState<Record<string, boolean>>({});

  const handleUploadClick = () => setIsSelectingType(true);

  const handleTypeSelection = (type: any) => {
    console.log(`Selected type: ${type}`);
    setIsSelectingType(false);
  };

  const handleCopyLink = (release_link: string) => {
    navigator.clipboard.writeText(release_link);
    toast.success('Link copied to clipboard!');
  };

  const toggleAlbumExpansion = (albumTitle: string) => {
    setExpandedAlbums(prev => ({
      ...prev,
      [albumTitle]: !prev[albumTitle]
    }));
  };

  const groupReleases = (releasesData: Release[]) => {
    return releasesData.reduce((acc, release) => {
      const key = release.release_title || 'Singles';
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(release);
      return acc;
    }, {} as Record<string, Release[]>);
  };

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/music`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
        });

        const releasesData = response.data.data.data;
        setReleases(releasesData);
        setGroupedReleases(groupReleases(releasesData));
      } catch (error) {
        console.error('Error fetching releases:', error);
        setReleases([]);
        setGroupedReleases({});
      } finally {
        setLoading(false);
      }
    };

    fetchReleases();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const SingleCard = ({ release }: { release: Release }) => (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <img
        src={release.album_art_url}
        alt={release.track_title}
        className="rounded-lg mb-3 w-full h-48 object-cover"
      />
      <h3 className="text-lg font-semibold truncate">{release.track_title}</h3>
      <p className="text-sm text-gray-500 truncate">{release.primary_artist}</p>
      {release.featured_artists && (
        <p className="text-xs text-gray-400">feat. {release.featured_artists}</p>
      )}
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded">
          Single
        </span>
        <div className="flex space-x-2">
          <button
            className="text-green-500 hover:text-green-600 p-1"
            onClick={() => handleCopyLink(release.release_link)}
            title="Copy release link"
          >
            <ClipboardIcon className="w-5 h-5" />
          </button>
          <button className="text-orange-500 hover:text-orange-600 p-1" title="Edit">
            <PencilIcon className="w-5 h-5" />
          </button>
          <button className="text-blue-500 hover:text-blue-600 p-1" title="More options">
            <EllipsisVerticalIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  const AlbumCard = ({ title, releases }: { title: string; releases: Release[] }) => {
    const isExpanded = expandedAlbums[title] || false;
    const mainRelease = releases[0];
  
    return (
      <motion.div
        className="bg-white shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <img
              src={mainRelease.album_art_url}
              alt={title}
              className="w-full sm:w-32 h-48 sm:h-32 rounded-lg object-cover"
            />
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-800 break-words">{title}</h3>
              <p className="text-md text-gray-600 mt-1">{mainRelease.primary_artist}</p>
              <p className="text-sm text-gray-500 mt-1">{releases.length} tracks</p>
              <div className="flex flex-col sm:flex-row gap-2 mt-3">
                <button
                  onClick={() => handleCopyLink(mainRelease.release_link)}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors w-full sm:w-auto"
                >
                  <ClipboardIcon className="w-4 h-4" />
                  <span>Copy Release Link</span>
                </button>
                <button
                  onClick={() => toggleAlbumExpansion(title)}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors w-full sm:w-auto"
                >
                  {isExpanded ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
                  <span>{isExpanded ? 'Hide Tracks' : 'Show Tracks'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {isExpanded && (
          <div className="border-t border-gray-200">
            <div className="divide-y divide-gray-200">
              {releases.map((track, index) => (
                <div key={track.id} className="p-3 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 w-full">
                      <span className="text-gray-500 w-6 text-center flex-shrink-0">{index + 1}</span>
                      <div className="flex-grow min-w-0">
                        <p className="font-medium truncate">{track.track_title}</p>
                        {track.featured_artists && (
                          <p className="text-sm text-gray-500 truncate">feat. {track.featured_artists}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => handleCopyLink(track.release_link)}
                          className="p-2 rounded-full hover:bg-gray-100 text-green-600"
                          title="Copy link"
                        >
                          <ClipboardIcon className="w-5 h-5" />
                        </button>
                        <button 
                          className="p-2 rounded-full hover:bg-gray-100 text-blue-600"
                          title="More options"
                        >
                          <EllipsisVerticalIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  const handleSearch = (event: { target: { value: SetStateAction<string>; }; }) => setSearch(event.target.value);

  const filteredGroups = Object.entries(groupedReleases).reduce<Record<string, Release[]>>((acc, [key, groupReleases]) => {
    const filtered = groupReleases.filter(release =>
      release.track_title.toLowerCase().includes(search.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[key] = filtered;
    }
    return acc;
  }, {});

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarMenu isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <ToastContainer />
      
      <div className={`flex-grow p-4 transition-all duration-300 ease-in-out ${
        isSidebarOpen ? 'md:ml-48' : 'ml-0'
      }`}>
        {isSelectingType ? (
          <UploadTypeSelection onSelect={handleTypeSelection} />
        ) : (
          <div className="space-y-6">
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center mt-10">
              <div className="w-full sm:w-1/3">
                <input
                  type="text"
                  placeholder="Search releases..."
                  value={search}
                  onChange={handleSearch}
                  className="border p-2 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {loading ? (
              <p className="text-center text-gray-500">Loading releases...</p>
            ) : Object.keys(filteredGroups).length > 0 ? (
              <div className="space-y-8">
                {Object.entries(filteredGroups).map(([releaseTitle, groupReleases]) => (
                  <div key={releaseTitle} className="space-y-4">
                    <h2 className="text-xl font-bold text-gray-800 border-b pb-2">
                      {releaseTitle === 'Singles' ? 'Singles' : 'Album'}
                    </h2>
                    <div className="grid grid-cols-1 gap-6">
                      {releaseTitle === 'Singles' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {groupReleases.map((release) => (
                            <SingleCard key={release.id} release={release} />
                          ))}
                        </div>
                      ) : (
                        <AlbumCard title={releaseTitle} releases={groupReleases} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center mt-10">
                <p className="text-gray-500">No releases found.</p>
                <button
                  onClick={handleUploadClick}
                  className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Create Release
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Link;