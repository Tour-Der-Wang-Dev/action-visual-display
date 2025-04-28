
import { useIsMobile } from '@/hooks/use-mobile';
import { WorkflowRun } from '../types/github';
import WorkflowContainer from '@/components/GitHubWorkflow/WorkflowContainer';

// Sample mock data for demonstration
const mockWorkflowRuns: WorkflowRun[] = [
  {
    id: 12345678,
    name: "CI Pipeline",
    status: "completed",
    conclusion: "success",
    head_branch: "main",
    head_sha: "abc123def456",
    run_number: 42,
    event: "push",
    created_at: new Date(Date.now() - 1800000).toISOString(), // 30 minutes ago
    updated_at: new Date(Date.now() - 1700000).toISOString(),
    html_url: "https://github.com/username/repo/actions/runs/12345678",
    duration_ms: 85000,
  },
  {
    id: 12345679,
    name: "Deploy to Production",
    status: "in_progress",
    conclusion: null,
    head_branch: "release/v1.2.0",
    head_sha: "def456ghi789",
    run_number: 41,
    event: "workflow_dispatch",
    created_at: new Date(Date.now() - 900000).toISOString(), // 15 minutes ago
    updated_at: new Date(Date.now() - 800000).toISOString(),
    html_url: "https://github.com/username/repo/actions/runs/12345679",
  },
  {
    id: 12345670,
    name: "Integration Tests",
    status: "completed",
    conclusion: "failure",
    head_branch: "feature/new-api",
    head_sha: "789jkl012mno",
    run_number: 40,
    event: "pull_request",
    created_at: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    updated_at: new Date(Date.now() - 85000000).toISOString(),
    html_url: "https://github.com/username/repo/actions/runs/12345670",
    duration_ms: 125000,
  },
];

const mockRepository = {
  name: "workflow-visualizer",
  owner: "username"
};

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-8 text-center">GitHub Workflow Visualizer</h1>
        
        <div className={`max-w-4xl mx-auto ${isMobile ? 'px-2' : 'px-4'}`}>
          <WorkflowContainer 
            workflowRuns={mockWorkflowRuns} 
            repository={mockRepository} 
            title="Recent Workflows"
          />
          
          <div className="mt-12 text-center text-gray-600">
            <p className="mb-2">This is a demonstration of the GitHub Workflow component.</p>
            <p>In a real application, this would connect to the GitHub API to fetch actual workflow data.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
