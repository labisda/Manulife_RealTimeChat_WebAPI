/****** Script for SelectTopNRows command from SSMS  ******/
SELECT
    [user_id],
    [firstname],
    [lastname],
    [username],
    [password],
    [date_created]
FROM
    [dbo].[users]
WHERE
    username COLLATE SQL_Latin1_General_CP1_CS_AS = @username
    AND password COLLATE SQL_Latin1_General_CP1_CS_AS = @password