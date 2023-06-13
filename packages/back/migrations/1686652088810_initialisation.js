/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("recipes", {
    id: "id",
    name: { type: "varchar(1000)", notNull: true },
  });
};

exports.down = (pgm) => {};
