import { error } from "console";


export async function fetchRepoFiles(owner : string, repo : string, token : any, path: string = '') {
    try {
      const url = `https://api.github.com/repos/${owner}/${repo}/contents${path}`;
      const headers = { Authorization: `Bearer ${token}` };
      const response = await fetch(url, { headers });
      if (response.ok) {
        return await response.json();  
      } else {
        throw new Error('Failed to fetch repository files');
      }
    } catch (err) {
      console.error('Error fetching repository files:', err);
      throw  err;
    }
  };


