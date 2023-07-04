INSERT INTO
    [dbo].[users] (
        [firstname],
        [lastname],
        [username],
        [password]
    )
VALUES
    (
        @firstname,
        @lastname,
        @username,
        @password
    );