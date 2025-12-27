import { render, screen } from '@testing-library/react';
import App from '../App';

test('should_render_management_system_title', () => {
  render(<App />);
  expect(screen.getAllByText(/Management System/i)[0]).toBeInTheDocument();
});

test('should_render_dashboard_heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Dashboard' })).toBeInTheDocument();
});

test('should_render_total_items_count', () => {
  render(<App />);
  expect(screen.getAllByText(/Total Items/i)[0]).toBeInTheDocument();
});

test('should_render_active_count', () => {
  render(<App />);
  expect(screen.getAllByText(/Active/i)[0]).toBeInTheDocument();
});

test('should_render_pending_count', () => {
  render(<App />)
  expect(screen.getAllByText(/Pending/i)[0]).toBeInTheDocument();
});

test('should_render_navigation_links', () => {
  render(<App />);
  expect(screen.getAllByText(/Items/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/Records/i)[0]).toBeInTheDocument();
});

test('should_render_dashboard_by_default', () => {
  render(<App />);
  expect(screen.getAllByText(/Total Items/i)[0]).toBeInTheDocument();
});

test('should_display_dashboard_metrics', () => {
  render(<App />);
  expect(screen.getAllByText(/Total Items/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/Active/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/Pending/i)[0]).toBeInTheDocument();
});

test('should_render_all_navigation_menu_items', () => {
  render(<App />);
  expect(screen.getAllByText(/Items/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/Records/i)[0]).toBeInTheDocument();
});

test('should_display_management_system_header', () => {
  render(<App />);
  expect(screen.getAllByText(/Management System/i)[0]).toBeInTheDocument();
});