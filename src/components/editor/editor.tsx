import React from 'react';
import { useStore } from "@hackbox/store";
import styled from "styled-components";
import Breadcrumbs from "./components/breadcrumbs/breadcrumbs";
import EmptyState from "./components/empty-state/empty-state";
import Tabs from "./components/tabs/tabs";
import MonacoEditor from 'react-monaco-editor';
import { getLanguageFromExt } from '@hackbox/utils/utils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default function Editor() {
  const selectedFile = useStore(state => state.selectedFile);
  const openFiles = useStore(state => state.openFiles);
  const language = getLanguageFromExt(selectedFile);

  return (
    selectedFile? (
      <Container>
        <Tabs filePaths={openFiles} />
        <Breadcrumbs filePath={selectedFile} />
        <MonacoEditor theme="vs-dark" language={language} />
      </Container>
    ): <EmptyState />
  );
}
