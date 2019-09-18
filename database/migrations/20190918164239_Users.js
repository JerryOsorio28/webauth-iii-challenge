
exports.up = function(knex) {
    return knex.schema
        .createTable('Users', tbl => {
            tbl.increments(); // id auto increment

            tbl
                .string('username', 50)
                .unique()
                .notNullable()
            tbl
                .string('password', 50)
                .notNullable()
            tbl 
                .string('department')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
};
