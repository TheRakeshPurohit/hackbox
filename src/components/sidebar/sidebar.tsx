import { ReactNode, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import FileTree from './components/file-tree/file-tree';
import { Collapse } from 'react-collapse';
import OpenFiles from './components/open-files/open-files';

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => props.theme.colors['sideBar.background']};
  color: ${(props) => props.theme.colors['sideBar.foreground'] || props.theme.colors['foreground']};
  user-select: none;
`;

const Header = styled.div`
  height: 20px;
  text-transform: uppercase;
  font-size: 0.78em;
  padding-top: 15px;
  padding-left: 25px;
  color: ${props => props.theme.colors['sideBarSectionHeader.foreground']};
`;

const SectionHeader = styled.div`
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
  padding: 5px;
  padding-left: 0;
  background: ${props => props.theme.colors['sideBarSectionHeader.background']};
  color: ${props => props.theme.colors['sideBarSectionHeader.foreground']};
  border-bottom: 1px solid ${props => props.theme.colors['sideBarSectionHeader.border']};
  display: flex;
  cursor: pointer;
`;

const SectionContent = styled(Collapse)`
  font-size: 0.9em;
`;

const SectionHeaderText = styled.div`
  margin-left: 5px;
`;

const Sections = styled.div`
  margin-top: 5px;
`;

const CollapseCSS = createGlobalStyle`
  .ReactCollapse--collapse {
    transition: height 150ms;
  }
`;

type SectionProps = {
  title: string;
  children?: ReactNode;
  defaultOpen?: boolean;
}

const Section = ({ title, children, defaultOpen }: SectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <SectionHeader onClick={() => setIsOpen(isOpen => !isOpen)}>
        <div style={{ marginLeft: "5px" }} className={`codicon codicon-chevron-${isOpen? 'down': 'right'}`}></div>
        <SectionHeaderText>{title}</SectionHeaderText>
      </SectionHeader>
      <SectionContent isOpened={isOpen || false}>
        {children}
      </SectionContent>
    </div>
  )
}

type SideBarProps = { selectedContainer?: string }

export default function SideBar({ selectedContainer = 'files' }: SideBarProps) {
  return (
    <>
      <CollapseCSS />
      <Container>
        <div style={{ display: selectedContainer === 'files'? 'block': 'none' }}>
          <Header>
            Explorer
          </Header>
          <Sections>
            <Section title="Open Editors" defaultOpen={true}>
              <OpenFiles /> 
            </Section>
            <Section title="Hackbox" defaultOpen={true}>
              <FileTree />
            </Section>
          </Sections>
        </div>
        <div style={{ display: selectedContainer === 'search'? 'block': 'none' }}>
          <Header>
            Search
          </Header>
        </div>
        <div style={{ display: selectedContainer === 'scm'? 'block': 'none' }}>
          <Header>
            Search
          </Header>
        </div>
        <div style={{ display: selectedContainer === 'extensions'? 'block': 'none' }}>
          <Header>
            Extensions
          </Header>
        </div>
      </Container>
    </>
  )
}
