
import React from 'react';
import WorkflowHeader from './WorkflowHeader';
import WorkflowList from './WorkflowList';
import { WorkflowRun, GitHubRepository } from '../../types/github';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface WorkflowContainerProps {
  workflowRuns: WorkflowRun[];
  isLoading?: boolean;
  error?: string;
  repository?: GitHubRepository;
  title?: string;
}

const WorkflowContainer = ({
  workflowRuns,
  isLoading = false,
  error,
  repository,
  title,
}: WorkflowContainerProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-0">
        <WorkflowHeader repository={repository} title={title} />
      </CardHeader>
      <CardContent>
        <WorkflowList 
          workflowRuns={workflowRuns} 
          isLoading={isLoading} 
          error={error}
        />
      </CardContent>
    </Card>
  );
};

export default WorkflowContainer;
