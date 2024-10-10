
-- Create User Table
CREATE TABLE IF NOT EXISTS user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL,
    fullname VARCHAR(50) NOT NULL,
    avatar VARCHAR(50) NULL,
    birthday DATETIME NULL,
    created_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create Friend Table
CREATE TABLE IF NOT EXISTS friend (
    id INT PRIMARY KEY AUTO_INCREMENT,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    status VARCHAR(20) CHECK (status IN ('pending', 'accepted', 'rejected')),
    FOREIGN KEY (sender_id) REFERENCES user(id),
    FOREIGN KEY (receiver_id) REFERENCES user(id)
);

-- Create Message Table
CREATE TABLE IF NOT EXISTS message (
    id INT PRIMARY KEY AUTO_INCREMENT,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    type VARCHAR(20) CHECK (type IN ('text', 'image', 'video', 'file')) NOT NULL,
    content VARCHAR(50) NULL,
    status VARCHAR(20) CHECK (status IN ('sent', 'pending_read', 'read')),
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES user(id),
    FOREIGN KEY (receiver_id) REFERENCES user(id)
);

-- Insert User Data
INSERT INTO user (username, password, fullname, avatar, birthday) VALUES 
('duy12111999', '12111999', 'Nguyen Sinh Duy', 'james.jpg', '1999-11-12'),
('alibaba', '2', 'Nguyen Sinh Duy', 'james.jpg', '1999-11-12'),
('phungmanhquang', '3', 'Nguyen Sinh Duy', 'james.jpg', '1999-11-12'),
('hovanquan', '4', 'Nguyen Sinh Duy', 'james.jpg', '1999-11-12');

-- Insert Friend Data
INSERT INTO friend (sender_id, receiver_id, status) VALUES 
(2, 3, 'pending'),
(2, 4, 'accepted'),
(1, 2, 'rejected'),
(4, 4, 'accepted');

-- Insert Message Data
INSERT INTO message (sender_id, receiver_id, type, content, status) VALUES 
(1, 3, 'text', 'xin chao ban xinh gai', 'read'),
(3, 1, 'image', 'selfie.png', 'sent'),
(2, 4, 'file', 'docs.xls', 'pending_read'),
(4, 2, 'text', 'cam on ban', 'read');

-- Query ra id = 2, id = 3
SELECT id, username, fullname, avatar 
FROM user 
WHERE id = 2 OR id = 3;

-- Tìm bạn bè của user có id = 2
SELECT username, fullname, avatar 
FROM friend f
JOIN user u ON (f.receiver_id = u.id OR f.sender_id = u.id)
WHERE (f.sender_id = 2 OR f.receiver_id = 2) 
AND status = 'accepted' 
AND u.id != 2;

-- Kiểm tra lịch sử nhắn tin với bạn bè
DECLARE @user_id INT;
SET @user_id = 4;

WITH FriendshipCheck AS (
    SELECT f.sender_id, f.receiver_id, f.status 
    FROM friend f
    WHERE ((f.sender_id = 2 AND f.receiver_id = @user_id) 
        OR (f.sender_id = @user_id AND f.receiver_id = 2))
        AND f.status = 'accepted'
)
SELECT m.id, m.sender_id, m.receiver_id, m.type, m.status, m.content, m.created_time
FROM message m
WHERE EXISTS (SELECT 1 FROM FriendshipCheck)
  AND ((m.sender_id = 2 AND m.receiver_id = @user_id) 
    OR (m.sender_id = @user_id AND m.receiver_id = 2))
ORDER BY m.created_time;

-- Lấy tin nhắn cuối cùng với bạn bè của id = 2
DECLARE @uid INT;
SET @uid = 4;

WITH FriendshipCheck AS (
    SELECT f.sender_id, f.receiver_id, f.status 
    FROM friend f
    WHERE ((f.sender_id = 2 AND f.receiver_id = @uid) 
        OR (f.sender_id = @uid AND f.receiver_id = 2))
        AND f.status = 'accepted'
)
SELECT m.id, m.sender_id, m.receiver_id, m.type, m.status, m.content, m.created_time
FROM message m
WHERE EXISTS (SELECT 1 FROM FriendshipCheck)
  AND ((m.sender_id = 2 AND m.receiver_id = @uid) 
    OR (m.sender_id = @uid AND m.receiver_id = 2))
ORDER BY m.created_time DESC
OFFSET 0 ROWS FETCH NEXT 1 ROW ONLY;

-- Danh sách 10 user có bạn bè nhiều nhất
SELECT 
    u.id,
    u.username,
    u.avatar,
    u.birthday,
    COUNT(f.id) AS friend_count 
FROM 
    user u
LEFT JOIN 
    friend f ON (u.id = f.sender_id OR u.id = f.receiver_id) 
WHERE f.status = 'accepted'  
GROUP BY 
    u.id, u.username, u.avatar, u.birthday  
ORDER BY 
    friend_count DESC  
OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY;
