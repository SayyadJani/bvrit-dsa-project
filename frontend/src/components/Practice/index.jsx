// src/App.jsx
import { useState, useEffect, createContext, useContext } from 'react';
import { ChevronDownIcon, MagnifyingGlassIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const Sidebar = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div className={`w-64 h-full fixed top-0 left-0 p-4 pt-20 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      <h2 className="text-xl font-bold mb-4">Let's Practice</h2>
      <ul>
        <li className="mb-2 cursor-pointer hover:underline">Aptitude</li>
        <li className="mb-2 cursor-pointer hover:underline">DSA Problems</li>
      </ul>
    </div>
  );
};

const questions = [
  { id: 1, title: 'Two Sum', status: 'Solved', difficulty: 'Easy', category: 'Array', link: '#' },
  { id: 2, title: 'Add Two Numbers', status: 'Unsolved', difficulty: 'Medium', category: 'Linked List', link: '#' },
  { id: 3, title: 'Longest Substring', status: 'Attempted', difficulty: 'Medium', category: 'String', link: '#' },
  { id: 4, title: 'Median of Arrays', status: 'Solved', difficulty: 'Hard', category: 'Array', link: '#' },
  { id: 5, title: 'Palindrome Check', status: 'Unsolved', difficulty: 'Easy', category: 'String', link: '#' },{ id: 1, title: 'Two Sum', status: 'Solved', difficulty: 'Easy', category: 'Array', link: '#' },
  { id: 6, title: 'Add Two Numbers', status: 'Unsolved', difficulty: 'Medium', category: 'Linked List', link: '#' },
  { id: 7, title: 'Longest Substring', status: 'Attempted', difficulty: 'Medium', category: 'String', link: '#' },
  { id: 8, title: 'Median of Arrays', status: 'Solved', difficulty: 'Hard', category: 'Array', link: '#' },
  { id: 9, title: 'Palindrome Check', status: 'Unsolved', difficulty: 'Easy', category: 'String', link: '#' },
  { id: 10, title: 'Two Sum', status: 'Solved', difficulty: 'Easy', category: 'Array', link: '#' },
  { id: 11, title: 'Add Two Numbers', status: 'Unsolved', difficulty: 'Medium', category: 'Linked List', link: '#' },
  { id: 12, title: 'Longest Substring', status: 'Attempted', difficulty: 'Medium', category: 'String', link: '#' },
  { id: 13, title: 'Median of Arrays', status: 'Solved', difficulty: 'Hard', category: 'Array', link: '#' },
  { id: 14, title: 'Palindrome Check', status: 'Unsolved', difficulty: 'Easy', category: 'String', link: '#' },
];

const QuestionTable = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  useEffect(() => {
    filterQuestions();
  }, [selectedCategory, selectedStatus, selectedDifficulty, searchQuery]);

  const filterQuestions = () => {
    let filtered = questions.filter(question => {
      const matchesCategory = selectedCategory === 'All' || question.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || question.status === selectedStatus;
      const matchesDifficulty = selectedDifficulty === 'All' || question.difficulty === selectedDifficulty;
      const matchesSearch = question.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesStatus && matchesDifficulty && matchesSearch;
    });
    setFilteredQuestions(filtered);
  };

  return (
    <div className={`p-6 flex-1 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} ml-64 overflow-auto`}> 
      <div className="flex justify-between items-center mb-6">
        <div className={`flex items-center rounded-lg px-4 py-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}> 
          <MagnifyingGlassIcon className={`h-5 w-5 mr-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}/>
          <input type="text" placeholder="Search questions..." className="bg-transparent outline-none" style={{ color: isDarkMode ? 'white' : 'black' }} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full bg-gray-800 text-white">
          {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
        </button>
        <div className="flex space-x-4">
          <select className="bg-gray-800 text-white rounded-lg px-4 py-2" value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
            <option value="All">All Status</option>
            <option value="Solved">Solved</option>
            <option value="Unsolved">Unsolved</option>
            <option value="Attempted">Attempted</option>
          </select>
          <select className="bg-gray-800 text-white rounded-lg px-4 py-2" value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
            <option value="All">All Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select className="bg-gray-800 text-white rounded-lg px-4 py-2" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="All">All Categories</option>
            <option value="Array">Array</option>
            <option value="Linked List">Linked List</option>
            <option value="String">String</option>
          </select>
        </div>
      </div>
      <div className={`overflow-auto max-h-[70vh] rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}> 
        <table className={`min-w-full ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}> 
          <thead className={isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">Difficulty</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">Category</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-200'}`}> 
            {filteredQuestions.map((question) => (
              <tr key={question.id} className={`${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-colors`}> 
                <td className="px-6 py-4 whitespace-nowrap"> 
                  <a href={question.link} className="text-blue-400 hover:text-blue-600 transition-colors">{question.title}</a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{question.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">{question.difficulty}</td>
                <td className="px-6 py-4 whitespace-nowrap">{question.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className='mt-16'>
    <DarkModeProvider>
      <Sidebar />
      <QuestionTable />
    </DarkModeProvider>
    </div>
  );
}
