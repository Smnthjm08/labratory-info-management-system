CREATE DATABASE limsmaster;

-- set extension --
--create extension if not exists "uuid-ossp";--
CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT 
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    role_id INT REFERENCES roles(role_id)
);

--set role default as guest
ALTER TABLE users
ALTER COLUMN role_id SET DEFAULT 4;


-- Create roles table
CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(100) UNIQUE
);

-- Insert into roles
INSERT INTO roles (role_name) VALUES ('lab_admin'), ('lab_technician'), ('pathologist'), ('guest');

-- Create permissions table
CREATE TABLE permissions (
    permission_id SERIAL PRIMARY KEY,
    permission_name VARCHAR(100) UNIQUE
);

-- Insert into permissions
INSERT INTO permissions (permission_name) VALUES ('manage_users'), ('manage_lab'), ('read_reports'), ('write_reports');

-- Create role-permisiions table
CREATE TABLE role_permissions (
    role_id INT REFERENCES roles(role_id),
    permission_id INT REFERENCES permissions(permission_id),
    PRIMARY KEY (role_id, permission_id)
);

--Insert into role permissions
INSERT INTO role_permissions (role_id, permission_id) VALUES
    (1, 1), -- lab_admin has manage_users permission
    (1, 2), -- lab_admin has manage_lab permission
    (2, 2), -- lab_technician has manage_lab permission
    (3, 3), -- pathologist has read_reports permission
    (3, 4); -- pathologist has write_reports permission


-- Populate the roles table with some example roles
INSERT INTO roles (role_name) VALUES
    ('admin'),
    ('lab_technician'),
    ('manager');

-- Create the junction table to associate users with roles
CREATE TABLE user_roles (
    user_id uuid REFERENCES users(user_id),
    role_id INTEGER REFERENCES roles(role_id),
    PRIMARY KEY (user_id, role_id)
);