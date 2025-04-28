
import React from 'react';
import { GitHubRepository } from '../../types/github';
import { Github } from 'lucide-react';

interface WorkflowHeaderProps {
  repository?: GitHubRepository;
  title?: string;
}

const WorkflowHeader = ({ repository, title = "GitHub Workflows" }: WorkflowHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-3">
        <Github className="h-6 w-6" />
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      
      {repository && (
        <a 
          href={`https://github.com/${repository.owner}/${repository.name}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline flex items-center gap-1"
        >
          {repository.owner}/{repository.name}
        </a>
      )}
    </div>
  );
};

export default WorkflowHeader;
