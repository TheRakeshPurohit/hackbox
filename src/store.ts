import createStore from 'zustand';
import vsDarkTheme from './themes/vs-dark';
import { loadMonacoModels } from './utils/utils';

type State = {
  openFiles: string[],
  files: Record<string, string>,
  setOpenFiles: (files: string[]) => void,
  selectedFile: string;
  setSelectedFile: (filePath: string) => void,
  theme: any;
  setTheme: (theme: any) => void;
  closeFile: (filePath: string) => void;
  setFiles: (files: Record<string, string>) => void;
}

export const useStore = createStore<State>(set => ({
  openFiles: [],
  files: {},
  setFiles: (files: Record<string, string>) => set(() => {
    loadMonacoModels(files);
    
    return { files };
  }),
  setOpenFiles: (files) => set(() => ({ openFiles: files })),
  selectedFile: '',
  setSelectedFile: (filePath) => set((state) => {
    const openFiles = [...state.openFiles];

    if (!openFiles.includes(filePath)) {
      openFiles.push(filePath);
    }

    return { selectedFile: filePath, openFiles };
  }),
  theme: vsDarkTheme,
  setTheme: (theme) => set(() => ({ theme })),
  closeFile: (filePath) => set((state) => {
    let openFiles = [...state.openFiles];
    const fileIndex = openFiles.indexOf(filePath);

    if (~fileIndex) {
      openFiles.splice(fileIndex, 1);
    }

    if (openFiles.length > 0 && state.selectedFile === filePath) {
      return { openFiles, selectedFile: openFiles[0] };
    } else {
      return { openFiles };
    }
  })
}));
