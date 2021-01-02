import React, { useEffect } from 'react';
import { useState } from "react";
import styled from "styled-components";
import ActivityBar from "@hackbox/components/activity-bar/activity-bar";
import Editor from "@hackbox/components/editor/editor";
import SideBar from "@hackbox/components/sidebar/sidebar";
import Statusbar from "@hackbox/components/statusbar/statusbar";
import 'vscode-codicons/dist/codicon.css';
import { useStore } from './store';
import { FILES } from './templates/react';

const Container = styled.div`
  height: 100vh;
`;

const Workspace = styled.div`
  display: flex;
  height: calc(100vh - 25px);
`;

export default function Home() {
  const [selectedSidebarContainer, setSelectedSidebarContainer] = useState('files');
  const setFiles = useStore(state => state.setFiles);

  useEffect(() => {
    setFiles(FILES);
  }, [setFiles]);

  return (
    <Container>
      <Workspace>
        <ActivityBar onSidebarItemClicked={name => name && setSelectedSidebarContainer(name)} />
        <SideBar selectedContainer={selectedSidebarContainer} />
        <Editor />
      </Workspace>
      <Statusbar />
    </Container>
  )
}
