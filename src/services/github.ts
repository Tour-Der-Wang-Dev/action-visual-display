
import { WorkflowRun } from '@/types/github';

export const fetchWorkflowItems = async (owner: string, repo: string) => {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/actions/runs`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch workflow items');
  }

  const data = await response.json();
  return data.workflow_runs as WorkflowRun[];
};
