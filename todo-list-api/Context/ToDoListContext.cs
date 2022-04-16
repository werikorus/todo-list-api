using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using todo_list_api.Models;

#nullable disable

namespace todo_list_api.Context
{
    public partial class ToDoListContext : DbContext
    {
        public ToDoListContext()
        {
        }

        public ToDoListContext(DbContextOptions<ToDoListContext> options)
            : base(options)
        {
        }

        public virtual DbSet<List> Lists { get; set; }
        public virtual DbSet<Tasks> Tasks { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("ServerConnection");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<List>(entity =>
            {
                entity.HasKey(e => e.Idlist)
                    .HasName("PK__Lists__F5D88C0DEA8EC4C2");

                entity.Property(e => e.Idlist)
                    .ValueGeneratedNever()
                    .HasColumnName("IDList");

                entity.Property(e => e.DateCreate).HasColumnType("datetime");

                entity.Property(e => e.DateUpdate).HasColumnType("datetime");

                entity.Property(e => e.DescriptionList)
                    .HasMaxLength(1)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Tasks>(entity =>
            {
                entity.HasKey(e => new { e.Idtask, e.Idlist })
                    .HasName("PK__Tasks__739E2939475CB580");

                entity.Property(e => e.Idtask).HasColumnName("IDTask");

                entity.Property(e => e.Idlist).HasColumnName("IDList");

                entity.Property(e => e.DateCreate).HasColumnType("datetime");

                entity.Property(e => e.DateUpdate).HasColumnType("datetime");

                entity.Property(e => e.DescriptionTask)
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdlistNavigation)
                    .WithMany(p => p.Tasks)
                    .HasForeignKey(d => d.Idlist)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_idLists");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
