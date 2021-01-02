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
import SplitPane from 'react-split-pane';

const Container = styled.div`
  height: 100vh;
`;

const Workspace = styled.div`
  height: calc(100vh - 25px);
`;

const EditorContainer = styled.div`
  height: calc(100vh - 25px);
`;

const AciticityBarAndSidebarContainer = styled.div`
  height: calc(100vh - 25px);
  display: flex;
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
        <SplitPane minSize={200} defaultSize={300}>
          <AciticityBarAndSidebarContainer>
            <ActivityBar onSidebarItemClicked={name => name && setSelectedSidebarContainer(name)} />
            <SideBar selectedContainer={selectedSidebarContainer} />
          </AciticityBarAndSidebarContainer>
          <EditorContainer>
            <Editor />
          </EditorContainer>  
        </SplitPane>
      </Workspace>
      <Statusbar />
    </Container>
  )
}
