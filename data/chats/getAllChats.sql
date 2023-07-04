/****** Script for SelectTopNRows command from SSMS  ******/
SELECT
    [chats].[id],
    [chats].[user_id],
    [chats].[message],
    [chats].[date_created],
    CONCAT([users].[firstname], ' ', [users].[lastname]) as fullname
FROM
    [ChatSystem].[dbo].[chats]
    INNER JOIN [dbo].[users] ON [dbo].[users].[user_id] = [dbo].[chats].[user_id]